import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'se-FI';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;