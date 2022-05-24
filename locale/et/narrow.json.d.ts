import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'et';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;