import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lt';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;