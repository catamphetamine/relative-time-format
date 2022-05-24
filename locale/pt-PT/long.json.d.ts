import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-PT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;