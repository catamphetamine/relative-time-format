import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;