import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lt';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;