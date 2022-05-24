import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;