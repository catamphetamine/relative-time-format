import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'chr';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;