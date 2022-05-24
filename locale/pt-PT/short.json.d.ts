import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-PT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;