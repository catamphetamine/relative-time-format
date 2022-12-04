import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kab';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;