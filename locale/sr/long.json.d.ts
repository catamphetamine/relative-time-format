import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;